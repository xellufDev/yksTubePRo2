import React from 'react'
import FavChannel from './FavChannel'

const FavChannelSection = () => {
  return (
    <div className="favchannel  flex  items-center gap-4 h-full pb-1 md:border-l border-gray-200/50 md:pl-10 pl-4">
      <h1 
      className='font-semibold text-sm pr-5'>Öne Çıkan Kanallar</h1>
    <FavChannel channelId="UC0yco2kB3xW3WI__8E8HaKw" channelThumbnail="https://yt3.googleusercontent.com/VXT0aiJKpE19IR3ag5V7mtl1Nyt-ApCMySW6YKDDHUw8yZs4cCpU1DLj-J8DrthmiKFxqeAlhQ=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UCzMVi_CPx_XB9uhMl4uWR9g" channelThumbnail="https://yt3.googleusercontent.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UC1nmW5kw6nXnB_5Sv-zeCNQ" channelThumbnail="https://yt3.googleusercontent.com/ytc/AL5GRJVMk-lx1UVNsFd_zmdG15MDfbJXMBslqi17jmJX9g=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UCzxj9SKkLuDhdxSDXxcmwqQ" channelThumbnail="https://yt3.googleusercontent.com/ytc/AL5GRJWrmnbivN3S96UAKtX5YJFUAJNbqOnNCZEiaF_Pag=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UCIvX31CHx2RsFQM46qbjuJA" channelThumbnail="https://mbr-content.becdn.net/atasoyftware_460442_13@gmail.com/824276643img.png?8363" handleClick="" />
  
  </div>
  )
}

export default FavChannelSection