const Layout = ({ children }) => {
    return (
        <div className='flex flex-col p-[10px] overflow-x-hidden '>
            {children}
        </div>
    )
}
export default Layout;