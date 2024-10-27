const fs = require("fs");
const path = require("path");

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`Creado el directorio: ${dirPath}`);
  } else {
    console.log(`El directorio ya existe: ${dirPath}`);
  }
}

function createFile(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Crear archivo: ${filePath}`);
  } else {
    console.log(`El archivo ya existe: ${filePath}`);
  }
}

function createDirectoryStructure(basePath, structure) {
  if (structure) {
    for (const item of structure) {
      const itemPath = path.join(basePath, item.name);

      if (item.isDirectory) {
        createDirectory(itemPath);
        createDirectoryStructure(itemPath, item.children);
      } else {
        createFile(itemPath, item.content);
      }
    }
  }
}

function generateDirectoryStructure(basePath) {
  const structure = [
    {
      name: "src",
      isDirectory: true,
      children: [        
        {
          name: "application",
          isDirectory: true,
          children: [
            {
              name: "components",
              isDirectory: true,
            },
            {
              name: "useCases",
              isDirectory: true,
            },
            {
              name: "services",
              isDirectory: true,
            },
          ],
        },
        {
          name: "presentation",
          isDirectory: true,
          children: [
            {
              name: "actions",
              isDirectory: true,
            },
            {
              name: "stores",
              isDirectory: true,
            },
            {
              name: "views",
              isDirectory: true,
            },

          ],
        },
        {
          name: "infrastructure",
          isDirectory: true,
          children: [          
            {
              name: "graphql",
              isDirectory: true,
            },
            {
              name: "rest",
              isDirectory: true,
            },
          ],
        },
        
      ],
    },
  ];

  createDirectoryStructure(basePath, structure);
}

const baseDirectory = process.argv[2];
if (baseDirectory) {
  generateDirectoryStructure(baseDirectory);
} else {
  console.error("Por favor ingrese el directorio del microservicio.");
}

//ejemplo de como ejecutar
//npm run generateDirectoryStructure ./packages/dashboard
