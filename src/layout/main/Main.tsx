import React from "react"
import GeneralPage from "ui/loader/general-page/General-page";
import SearchBar from "../../components/search-bar/Search-bar";


const Main =()=>{
    return (
        <main className="main">
            <SearchBar/>
            <GeneralPage/>
        </main>
    )
}
export default Main;