import React from 'react'

const Header = () => {
  return (
    <>
      <header className="bg-secondary px-10 py-14 rounded-b-[35px]">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src="/account.png" alt="" />
            <div className='flex flex-col'>
              <div className="flex items-center justify-center gap-1">
                <h3 className="text-primary">Himel Tasrif</h3>
                <div>
                  <img src="/down-chevron.png" alt="" />
                </div>
              </div>
              <small className="text-primary">tasrif752hm7</small>
            </div>
          </div>
          <div>
            <img src="/bar.png" alt="" />
          </div>
        </div>
        <div className="flex mt-6 items-center justify-center">
          <img src="/logo.png" alt="" />
        </div>
      </header>
    </>
  );
}

export default Header