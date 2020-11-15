export const getCookie = (name: string): any => {
  const value: string = "; " + document.cookie;
  console.log(value)
  const parts: any = value.split("; " + name + "=") || [];

  if (parts.length === 2) {
    return parts.pop().split(";").shift()
  };
}