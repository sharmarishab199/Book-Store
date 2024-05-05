import { Sidebar } from 'flowbite-react';
// import { BiBuoy } from 'react-icons/bi';
import { FaHome } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi";
import { HiArrowSmRight, HiChartPie, HiInbox,HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../assets/profile.jpg"
import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';

const SideBar = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="#" img={user?.photoURL||userImg} imgAlt="Flowbite logo">
                <p>{user?.displayName||"Demo User"}</p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={FaHome}>
                        Home
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>
                    {/* <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item> */}
                    <Sidebar.Item href="/shop" icon={HiBookOpen}>
                        Books
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="/logout" icon={HiTable}>
                        Log Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                {/* <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Upgrade to Pro
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup> */}
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar
