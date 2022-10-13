const getDateInFrench = (data, lang) => {
    const date = new Date(data);
    return date.toLocaleDateString(lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  export {getDateInFrench}