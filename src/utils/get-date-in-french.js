const getDateInFrench = (data) => {
    const date = new Date(data);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  export {getDateInFrench}