const fs = require('fs');

function snakeToCamel(s) {
  return s.replace(/(_\w)/g, function (m) {
    return m[1].toUpperCase();
  });
}

function camelToSnake(s) {
  return s.replace(/[\w]([A-Z])/g, function (m) {
    return m[0] + '_' + m[1].toLowerCase();
  });
}

function transformPrismaSchema(input) {
  const lines = input.split('\n');
  let output = '';

  let isInModelBlock = false;
  let currentModelName = '';

  for (let line of lines) {
    if (line.trim().startsWith('model')) {
      isInModelBlock = true;
      const modelNameMatch = line.match(/model (\w+)/);
      currentModelName = modelNameMatch ? modelNameMatch[1] : '';
      line = `model ${snakeToCamel(currentModelName)} {`;
    }

    if (isInModelBlock && line.trim() === '}') {
      isInModelBlock = false;
    }

    if (isInModelBlock && line.trim() !== '' && !line.trim().startsWith('@')) {
      const parts = line.split(/\s+/);
      const snakeCaseName = parts[1]?.trim();
      if (snakeCaseName) {
        const camelCaseName = snakeToCamel(snakeCaseName);
        line = line.replace(snakeCaseName, camelCaseName);
      }
    }

    // Convert relation names to camel case
    if (line.includes('@relation(')) {
      line = line.replace(/(\[\w+\])/, function (m) {
        return snakeToCamel(m);
      });
    }

    if (!isInModelBlock && line.trim() !== '') {
      const parts = line.split(/\s+/);
      const camelCaseName = parts[1]?.trim();
      if (camelCaseName) {
        const snakeCaseName = camelToSnake(camelCaseName);
        line = line.replace(camelCaseName, snakeCaseName);
      }
    }

    output += line + '\n';
  }

  return output.trim();
}

// Chemin vers le fichier schema.prisma
const filePath = './schema.prisma';

// Lire le contenu du fichier
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture du fichier:', err);
    return;
  }

  // Appliquer la transformation
  const transformedSchema = transformPrismaSchema(data);

  // Écrire le nouveau schéma dans le fichier
  fs.writeFile(filePath, transformedSchema, 'utf8', (err) => {
    if (err) {
      console.error('Erreur d\'écriture dans le fichier:', err);
      return;
    }
    console.log('Le schéma transformé a été écrit dans le fichier schema.prisma.');
  });
});
