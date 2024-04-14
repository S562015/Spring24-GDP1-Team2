import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import HelpIcon from '@mui/icons-material/Help';
import { toast } from "react-toastify";
import { css } from "glamor";

const Message = ({ msg, icon }) => (
    <>
        <Grid container direction="row">
            <Grid item>{icon}</Grid>
            &nbsp;
            <Grid item>
                <Typography>{msg}</Typography>
            </Grid>
        </Grid>
    </>
);

// toast.configure({
//     position: "bottom-left",
//     timerExpires: 5000
// });

const ToastConfig = {
    success(msg) {
        return toast.success(<Message msg={msg} icon={<CheckIcon />} />, {
            className: css({
                background: "#3CD52E"
            })
        });
    },
    info(msg) {
        return toast.info(<Message msg={msg} icon={<InfoIcon />} />, {
            className: css({
                background: "#0098CE"
            })
        });
    },
    warn(msg) {
        return toast.warn(<Message msg={msg} icon={<HelpIcon />} />, {
            className: css({
                background: "#FFE900"
            })
        });
    },
    error(msg) {
        return toast.error(<Message msg={msg} icon={<ErrorIcon />} />, {
            className: css({
                background: "#EB0029"
            })
        });
    }
};

export const success=(msg)=> {
    return toast.success(<Message msg={msg} icon={<CheckIcon />} />, {
        className: css({
            background: "#3CD52E"
        })
    });
}

export default ToastConfig;
