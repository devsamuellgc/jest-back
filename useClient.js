export const useClient = () => {
  const soma = (num1, num2) => {
    return num1 + num2;
  };

  function handleCpfCnpjFormat(document) {
    let formattedDocument = document.replace(/\D/g, "");
    if (formattedDocument.length === 11) {
      formattedDocument = formattedDocument.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
      );
    }

    if (formattedDocument.length === 14) {
      formattedDocument = formattedDocument.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
      );
    }

    return formattedDocument;
  }

  return { soma, handleCpfCnpjFormat };
};
