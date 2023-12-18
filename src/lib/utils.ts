export const getDate = (type: boolean): any => {
  const date = new Date(Date.now()).toLocaleDateString("nl-nl", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    }).replaceAll(" ", ", ");
    
  return date;
}

export const getTime = (): any => {
  const time = new Date().getHours();
  const icon = time > 6 && time < 18 ? "fa-solid fa-sun" : "fa-solid fa-moon"

  return icon;
}

