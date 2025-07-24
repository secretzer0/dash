import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      totalSize += stats.size;
    }
  });
  
  return totalSize;
}

function generateReport() {
  const distPath = path.join(__dirname, 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Build directory not found. Run npm run build:prod first.');
    return;
  }
  
  console.log('\n📊 Production Build Report\n');
  console.log('─'.repeat(50));
  
  const totalSize = getDirectorySize(distPath);
  console.log(`Total Build Size: ${formatBytes(totalSize)}`);
  console.log('─'.repeat(50));
  
  // Analyze by file type
  const fileTypes = {};
  
  function analyzeFiles(dirPath, basePath = '') {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        analyzeFiles(filePath, path.join(basePath, file));
      } else {
        const ext = path.extname(file);
        if (!fileTypes[ext]) {
          fileTypes[ext] = { count: 0, size: 0, files: [] };
        }
        fileTypes[ext].count++;
        fileTypes[ext].size += stats.size;
        fileTypes[ext].files.push({
          path: path.join(basePath, file),
          size: stats.size
        });
      }
    });
  }
  
  analyzeFiles(distPath);
  
  console.log('\nBy File Type:');
  console.log('─'.repeat(50));
  
  Object.entries(fileTypes)
    .sort((a, b) => b[1].size - a[1].size)
    .forEach(([ext, data]) => {
      console.log(`${ext || 'no extension'}: ${data.count} files, ${formatBytes(data.size)}`);
    });
  
  console.log('\n\nLargest Files:');
  console.log('─'.repeat(50));
  
  const allFiles = [];
  Object.values(fileTypes).forEach(type => {
    allFiles.push(...type.files);
  });
  
  allFiles
    .sort((a, b) => b.size - a.size)
    .slice(0, 10)
    .forEach(file => {
      console.log(`${formatBytes(file.size).padEnd(10)} ${file.path}`);
    });
  
  console.log('\n✅ Build analysis complete!\n');
}

generateReport();