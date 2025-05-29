import { Button, Icon } from "@mui/material"

const AdminHeader = () =>{

    
    return (
        <div 
            style={{
                // marginTop:'60px',
                paddingLeft:'26px',
                addingRight:'26px',
                backgroundColor:'orange',
                display:'flex',
                justifyContent: 'space-between',
                alignItems:'center',
                height:'60px',
            }}>

           <div>Foxblog.com</div>
           <div>

           </div>
           <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center'}} >
                <Button>
                    <a href="/admin/login">login</a>
                </Button>
                <Button>avatar</Button>
                <Icon>add_circle</Icon>
           </div>
        </div>

    )
}
export default AdminHeader