function findItemById(menu, id) {
    for (const item of menu) {
      // If this item has the target ID, return it
      if (item.id === id) {
        return item;
      }
  
      // If this item has a submenu, search recursively
      if (item.menu && Array.isArray(item.menu)) {
        const found = findItemById(item.menu, id);
        if (found) return found;
      }
    }
  
    return null; // Not found
  }

  export default findItemById;