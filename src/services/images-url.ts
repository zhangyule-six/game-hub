
const getCroppedImageUrl = (url:string) =>{
  const target = 'media/';
  const index = url.indexOf(target)+ target.length;//为了包括‘media/’本身的长度
 return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}
export default getCroppedImageUrl;