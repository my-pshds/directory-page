// 指定要导入的文件扩展名
declare module "*.yml" {
    const value: any; // 添加期望的类型定义
    export default value;
  }