export const handleError = async (response) => {
  if (response.status === 400 || response.status === 404) {
    const { error } = (await response.json()) || {};
    throw new Error(error.message);
  } else if (!response.ok) {
    const err = response.statusText || "Ha ocurrido un error";
    throw new Error(err);
  }
  return response;
};

export default handleError;
