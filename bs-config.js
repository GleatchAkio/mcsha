module.exports = {
    proxy: "http://mcsha:3001",
    files: ["views/**/*.ejs"],
    port: 2000,
    ui: {
      port: 3002
    },
    open: false,
    notify: false
};
  
