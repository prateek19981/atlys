import applogo from '../../assets/mouse.svg'
import LoginIcon from '../../assets/log-in-2.svg'
import type { HeaderProps } from './constants/header.interface'


function Header({ user, handleLogout, setIsAuthModalOpen }: HeaderProps)
{
    return <header className="sticky top-0 bg-white z-10">
    <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
      <img src={applogo} width={34} height={34} alt="app-logo"/>
      <h2 className="font-inter font-[700] text-[16]">foo-rum</h2>
      </div>

      {user ? (
        <div className="flex items-center space-x-3 ">
          <span className="text-sm text-gray-700">{user.name}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="flex font-[600] text-sm items-center space-x-2 cursor-pointer"
        >
          <span>Login</span>
          <div className="w-4 h-4 rounded flex items-center justify-center">
            <img src={LoginIcon} width={20} height={20} alt="login-icon"/>
          </div>
        </button>
      )}
    </div>
  </header>

}

export default Header