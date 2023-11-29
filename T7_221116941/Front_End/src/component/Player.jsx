import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../app/playerSlice";

function Player(){
    const dispatch = useDispatch();
    const arrPlayer = useSelector((state) => state.player.arrPlayer);
    const [player, setPlayer] = useState([])

    useEffect(() => {
        getPlayer();
    }, [])

    async function getPlayer(){
        const result = await axios.get(`http://localhost:3000/api/players`);
        setPlayer(result.data)
        // dispatch(addPlayer(result.data));
        dispatch(addPlayer(player));
        console.log(result.data);
    }

    async function delPlayer(){
        const result = await axios.delete(`https://localhost:3000/api/players/${player[0].name}`)
    }

    return (
        <>
            <div class="table w-full">
                <div class="table-header-group">
                    <div class="table-row">
                        <div class="table-cell text-left border text-center text-2xl"><strong>Name</strong></div>
                        <div class="table-cell text-left border text-center text-2xl"><strong>Age</strong></div>
                        <div class="table-cell text-left border text-center text-2xl"><strong>Position</strong></div>
                        <div class="table-cell text-left border text-center text-2xl"><strong>Number</strong></div>
                        <div class="table-cell text-left border text-center text-2xl"><strong>Nationality</strong></div>
                        <div class="table-cell text-left border text-center text-2xl"><strong>Action</strong></div>
                    </div>
                </div>
                <div class="table-row-group">
                    {
                        player.map((p) => {
                            return (
                                <div class="table-row">
                                    <div class="table-cell border text-center">{p.name}</div>
                                    <div class="table-cell border text-center">{p.age}</div>
                                    <div class="table-cell border text-center">{p.position}</div>
                                    <div class="table-cell border text-center">{p.number}</div>
                                    <div class="table-cell border text-center">{p.nationality}</div>
                                    <div className="flex table-cell border">
                                        <div className="flex justify-center">
                                            <button className="border rounded-lg bg-green-500 w-24">Update</button>
                                            <button className="border rounded-lg bg-red-400 w-24">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Player;