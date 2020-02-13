import React from "react";
import {connect} from "react-redux";
import {getSongs, setCurrentSongs, setPage, setSongs} from "../redux/songsReducer";
import s from '../App.module.css'
import {TableBody} from "./TableBody";
import {Table} from "./Table";
import {Selects} from "./Selects";
import {Pagination} from "./Pagination";
import {slice} from "lodash";
import {compose} from "redux";

export const ARTIST = "Artist";
export const SONG = "Song";
export const COUNTRY = "Country";
export const YEAR = "Year";
export const ALL = 'ALL';
export const UP = "up";
export const DOWN = "down";

class Main extends React.Component {

    componentDidMount() {
        const {currentSongs, songs} = this.props;
        this.props.getSongs(currentSongs, songs);
    }

    state = {
        selected: ALL
    };

    setSelected = (newSelectedValue) => {
        this.setState({selected: newSelectedValue})
    };

    sortSongParams = (songParam, direction) => {
              let sorteredSongs = this.props.currentSongs.sort((a, b) => {
            return a[songParam].localeCompare(b[songParam])
        });
               if (direction === UP) {
            this.props.setSongs(sorteredSongs);
        } else if (direction === DOWN) {
            let reverseSong = sorteredSongs.reverse();
            this.props.setSongs(reverseSong);
        }
    };

    sortByUP = (sort) => {
        this.sortSongParams(sort, UP);
    };

    sortByDown = (sort) => {
        this.sortSongParams(sort, DOWN);
    };

    onChanged = (str, selectedValue) => {
        let filteredSongs = this.props.songs.filter((value) => {
            return value[str] === selectedValue
        });
        if (selectedValue === ALL) {
            this.props.getSongs();
        } else {
            this.setSelected(selectedValue);
            this.props.setCurrentSongs(filteredSongs);
        }
    };

    onChangedValue = (str, e) => {
        this.onChanged(str, e.currentTarget.value);
    };

    getPage = (newPage, newPageCount) => {
        this.props.setPage(newPage, newPageCount);
    };


    render() {

        const tableElements = slice(this.props.currentSongs,
            [(this.props.page - 1) * this.props.pageCount],
            [this.props.pageCount * this.props.page]).map(s => {
            return <TableBody year={s.Year}
                              country={s.Country}
                              artist={s.Artist}
                              song={s.Song}
                              key={s.Year + Math.random()}/>
        });

        return (
            <div className={s.container}>
                <div className={s.tableSongs}>
                    <Table sortByUP={this.sortByUP}
                           sortByDown={this.sortByDown}
                           tableElements={tableElements}/>
                    <Selects onChangedValue={this.onChangedValue}
                             selected={this.state.selected}
                             songs={this.props.songs}/>
                </div>
                <div className={s.paginatorContainer}>
                    <Pagination page={this.props.page}
                                pageCount={this.props.pageCount}
                                totalCount={this.props.totalCount}
                                getPage={this.getPage}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songsPage.songs,
        currentSongs: state.songsPage.currentSongs,
        page: state.songsPage.page,
        pageCount: state.songsPage.pageCount,
        totalCount: state.songsPage.totalCount
    }
};

export const MainContainer = compose(connect(mapStateToProps,
    {getSongs, setCurrentSongs, setPage, setSongs})(Main));
