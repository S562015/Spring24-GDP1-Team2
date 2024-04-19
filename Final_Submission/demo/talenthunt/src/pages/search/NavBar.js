import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import JobCard from "../../components/Card/JobCard";
import {useDispatch, useSelector} from "react-redux";
import {getJobs} from "../home/homeActions";


const NavBar = () => {
    const { jobList } = useSelector((state) => state.homeReducer);
    const [searchList, setSearchList] = useState([]);
    const dispatch = useDispatch()

    console.log({jobList})

    useEffect(() =>{
        setSearchList(jobList)
    },[jobList])

    useEffect(() => {
        dispatch(getJobs());
    }, []);
    const handleChange = (event) => {
        console.log(event.target.value);
       let filterData = jobList.filter(val => val.title.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log({filterData})
        setSearchList(filterData)
    };
    const renderJobList = () => {
        return searchList?.map((job, index) => <JobCard job={job} index={index} />);
    };



    return (
        <>
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            onChange={handleChange}
            InputProps={{
                startAdornment: <SearchIcon/>,
            }}
        />
    <div className="popular-jobs">{renderJobList()}</div>
        </>
    )
}

export default NavBar
