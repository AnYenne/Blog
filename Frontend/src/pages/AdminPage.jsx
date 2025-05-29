import AdminCenter from "../components/AdminCenter"
import AdminSideBar from "../components/AdminSideBar"
import AdminHeader from "../components/AdminHeader"

const AdminPage = () => {


    return (
        <div style={{display:'flex',}}>
            <div>
                <AdminSideBar></AdminSideBar>
            </div>
            <div style={{paddingLeft:'70px', width:'100%', height:'400px'}}>
                {/* <AdminHeader /> */}
                <h2 style={{textAlign:'center'}}>admin page</h2>
                
            </div>
        </div>
    )
}

export default AdminPage