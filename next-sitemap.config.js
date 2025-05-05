// import getMenu from './src/lib/menu';
// Helper function to extract all items from your menu structure
// function getAllItems(menuData) {
//   const items = [];
  
//   menuData.forEach(category => {
//     category.menu.forEach(subcategory => {
//       subcategory.menu.forEach(item => {
//         items.push(item);
//       });
//     });
//   });
  
//   return items;
// }

module.exports = {
  siteUrl: 'https://www.rwanda3dvirtualtours.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.rwanda3dvirtualtours.com/sitemap-extra.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // additionalPaths: async () => {
  //   const menuData = getMenu();
  //   const allItems = getAllItems(menuData);
    
  //   return allItems.map(item => ({
  //     loc: `/item/${item.id}`,
  //     changefreq: 'daily',
  //     priority: 0.7,
  //     lastmod: new Date().toISOString(),
  //     // Optional: Add more metadata if available
  //     ...(item.name && { name: item.name }),
  //     ...(item.description && { description: item.description }),
  //   }));
  // },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}