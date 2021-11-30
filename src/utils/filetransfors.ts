/**
 * @name 异步记载图片，返回img元素
 * @param url
 */
export function loadImage(imgUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imgUrl + '?v=' + Math.random(); // 处理缓存
    image.crossOrigin = '*'; // 支持跨域图片
    /** 可解决跨域问题 */
    image.crossOrigin = '';
    image.onload = (e: any) => {
      resolve(e.target);
    };
    image.onerror = reject;
  });
}

/**
 * @name 获取图片资源返回Response对象
 * @params imgUrl
 */
export function fetchPictureResources(imgUrl: string): Promise<Response> {
  /** 有些图片产生跨域没权限，设置请求头，或者是http跟https图片的区别 */
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open('get', imgUrl, true);
    // type换成blob
    xhr.responseType = 'blob';

    xhr.onload = async function () {
      // Response
      if (xhr.status == 200) {
        // xhr.response其实就是blob对象
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}

/**
 * @name 一般ajax
 * @param url
 * @param data
 */
export function getAjax(url: string, data: any) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, false);
    xhr.onreadystatechange = function (res) {
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status == 304) {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  });
}

/**
 * @name 将img标签元素转换成base64
 * @param img
 * @param width
 * @param height
 */
export function getBase64Image(
  img: HTMLImageElement,
  width?: number,
  height?: number,
): string | undefined {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height);
      return canvas.toDataURL();
      // ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
      /** toDataURL转成base64 可参数('image/jpeg', 0.8) */
      // return canvas.toDataURL('image/png');
    }
  } catch (e) {
    console.error(e, 'getBase64Image');
  } finally {
    console.log('finally');
  }
}

/**
 * @name 将图片通过canvas重新绘制在转换成base64
 * @param imgUrl
 */
export function img2Canvas2Base64(imgUrl: string) {
  return new Promise((resolve, reject) => {
    loadImage(imgUrl).then((img) => {
      resolve(getBase64Image(img));
    });
  });
}

/**
 * @name 将文件转换成base64
 * @param file
 */
export function fileReader2Base64(
  file: any,
): Promise<string | ArrayBuffer | null> {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    /** 转成base64 */
    reader.readAsDataURL(file);
    // 转成二进制
    // reader.readAsBinaryString(file)
  });
}

/**
 * @name 将图片通过fileReader转换成base64
 * @param imgUrl
 */
export function img2fileReader2Base64(
  imgUrl: string,
): Promise<string | ArrayBuffer | null> {
  /** 有些图片产生跨域没权限，设置请求头，或者是http跟https图片的区别 */
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open('get', imgUrl, true);
    // type换成blob
    xhr.responseType = 'blob';

    xhr.onload = async function () {
      // Response
      if (xhr.status == 200) {
        // xhr.response其实就是blob对象
        const res = await fileReader2Base64(xhr.response);
        resolve(res);
      }
    };
    xhr.send();
  });
}

/**
 * @name 将图片转换成file对象
 * @param dataURL
 */
export async function imageToFile(dataURL: string) {
  const res = await fetchPictureResources(dataURL);
  const blob = await res.blob();
  return new File([blob], `${new Date().valueOf().toString()}.jpeg`, {
    type: 'image/png',
  });
}

/**
 * @name 将base64转换成文件
 * @param dataurl
 * @param filename
 */
export function dataURLtoFile(dataurl: string, filename: string) {
  // 获取到base64编码
  const arr = dataurl.split(',');
  // 将base64编码转为字符串
  const bstr = window.atob(arr[1]);

  // 文件类型
  const mime = arr?.[0]?.match?.(/:(.*?);/)?.[1];

  let n = bstr.length;

  const u8arr = new Uint8Array(n); // 创建初始化为0的，包含length个元素的无符号整型数组

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: mime ?? 'image/jpeg',
  });
}

// const utils = Object.defineProperties(
//   {
//     /** get请求 */
//     getAjax: getAjax,
//     /** 图片地址通过fileReader转换成base64 */
//     img2fileReader2Base64: img2fileReader2Base64,
//     /** 图片地址通过canvas转成base64 */
//     img2Canvas2Base64: img2Canvas2Base64,
//   },
//   false,
// );

// utils
//   .img2Canvas2Base64(
//     'https://fastmarket.oss-cn-shenzhen.aliyuncs.com/oss/static/other/1/images/baseMap_index.jpg',
//   )
//   .then((res) => {
//     console.log(res, 'res');
//   });
