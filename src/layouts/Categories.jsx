import React from 'react';
import { Button, Menu, MenuItem } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu  vertical>

                 
               <MenuItem >
               <Button  color='blue'>İş İlanları</Button>
               </MenuItem>
               <MenuItem>
               <Button  color='blue'>İş Verenler</Button>
               </MenuItem>
               <MenuItem>
               <Button  color='blue'>İş Arayanlar</Button>
               </MenuItem>
            </Menu>
        </div>
    );
}
