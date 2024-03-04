

const Footer = () => {
  return (
    <div 
      className="px-[100px] bg-black  mt-[100px] flex justify-center flex-col py-[25px] max-md:px-[50px]
      max-sm:px-[15px]"
    >
      <h1 className="text-[25px] text-white font-semibold max-sm:text-center max-md:text-[20px] max-sm:text-[16px]">
        About CzSx
      </h1>
      <p className="mt-3 text-gray-500 text-[14px] font-medium max-sm:text-center max-sm:text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum
        illo nobis? Ipsum quas dignissimos esse laboriosam asperiores magni
        incidunt eligendi aliquid? Enim similique reprehenderit atque sapiente
        vero soluta molestias.
      </p>
      <div className="flex gap-3 mt-3 flex-wrap max-sm:justify-center">
        <a className="text-white font-normal text-[11px] underline" href="">Facebook</a>
        <a className="text-white font-normal text-[11px] underline" href="">Instagram</a>
        <a className="text-white font-normal text-[11px] underline" href="">Twitter</a>
        <a className="text-white font-normal text-[11px] underline" href="">Youtube</a>
        <a className="text-white font-normal text-[11px] underline" href="">Blog</a>
        <a className="text-white font-normal text-[11px] underline" href="">afsalpu07@gmail.com</a>
      </div>
      <div className="h-[1px] w-full border-b-[1px] border-b-slate-800 mt-5" />

      <div className="text-white flex items-center mt-3 justify-center text-[12px]">
        @copyriht@czsx.com
      </div>
    </div>
  );
};

export default Footer;
