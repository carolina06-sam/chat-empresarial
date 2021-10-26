import React from 'react'

export const SidebarChatItem = () => {
    return (
        <div className="chat_list">
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://i0.wp.com/png.pngitem.com/pimgs/s/535-5353428_stitch-disney-blue-cute-cute-lilo-and-stitch.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>Sofia O</h5>
                    <span className="text-success">Online</span>
                    <span className="text-danger">Offline</span>
                </div>
            </div>
        </div>
    )
}
