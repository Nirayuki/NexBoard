export const savePreviousPath = (path) => {
    localStorage.setItem("previousPath", path);
  };
  
  export const getPreviousPath = () => {
    const previousPath = localStorage.getItem("previousPath");
    localStorage.removeItem("previousPath");
    return previousPath;
  };