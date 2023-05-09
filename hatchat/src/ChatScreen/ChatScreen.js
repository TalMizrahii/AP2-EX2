import './ChatScreen.css'
import '../LoginScreen/LoginScreen.css'
import GeneralBackground from "../GeneralComponents/GeneralBackground";
import GeneralContainer from "./GeneralContainer";
import ChatSpace from "./ChatHeaderAndList/ChatSpace";
import HeaderBox from "./ChatHeaderAndList/HeaderBox";
import UserImageLeftTopCorner from "./ChatHeaderAndList/UserImageLeftTopCorner";
import AddContactIcon from "./ChatHeaderAndList/AddContactIcon";
import NavIcons from "./ChatHeaderAndList/NavIcons";
import ModalAddContact from "./ChatHeaderAndList/ModalAddContact";
import ModalAddContactWrap from "./ChatHeaderAndList/ModalAddContactWrap";
import DropdownMenu from "./ChatHeaderAndList/DropdownMenu";
import MenuBtn from "./ChatHeaderAndList/MenuBtn";
import ManuWrapper from "./ChatHeaderAndList/ManuWraper";
import SearchInput from "./ChatHeaderAndList/SearchInput";
import ListGroupOfContacts from "./ChatHeaderAndList/ListGroupOfContacts.";
import UserInList from "./ChatHeaderAndList/UserInList";

function ChatScreen() {
    return (
        <>
            <GeneralBackground/>
            <GeneralContainer>
                <ChatSpace>
                    <HeaderBox>
                        <UserImageLeftTopCorner/>
                        <NavIcons>
                            <AddContactIcon/>
                            <ModalAddContactWrap>
                                <ModalAddContact/>
                            </ModalAddContactWrap>
                            <ManuWrapper>
                                <li><a className="dropdown-item" href="#">Switch user</a></li>
                                <li><a className="dropdown-item" href="#">Change profile picture</a></li>
                                <li><a className="dropdown-item" href="#">Archive</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="index.html">Logout</a></li>
                            </ManuWrapper>
                        </NavIcons>
                    </HeaderBox>
                    <SearchInput/>

                    <ListGroupOfContacts>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>
                        <UserInList/>

                        {/*<li className="list-group-item list-group-item-action">*/}
                        {/*    <div className="user-img">*/}
                        {/*        <img className="dp"*/}
                        {/*             src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUQERQSFRMVFRYYFRgVFxgYFxcYGRYXGBUWFRYYHyggGB0lHhcXIT0jKikwLzEuGB8zODMtNygtLi0BCgoKDg0OGxAQGy0mICU1LS0tLi0tLSsyLy0tLS0tLS8wMC0vLS0tLS0tKy0tLS0tLTUtNS0tLS0tLy0tLS0tLf/AABEIALYBFQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAwUHAv/EAEMQAAIBAgQCBwMIBwcFAAAAAAECAAMRBBIhMQVBBhMiUWFxgTKRoSNCUnKCkrGyBxRjwcLR4SQzU2Jz0vAVZJOi8f/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QANREAAgECAwUHAwIGAwAAAAAAAAECAxEEITESQVGR8AVhcYGhscETItEUMgZicqLh8TNCUv/aAAwDAQACEQMRAD8AsMRE4k6oREQBERAEREAREQBERAEREARNNfFIntsATsOZ8huZFfjdAG2Y3+qw/MBMlCT0TF0dCJEpcTpML3YeasPja0hY3pBTR8t0KgLmbONMxsNOfvEyjSnJ2SMlFt2S7zsRIbcUoj59/qq7flBj/qtL9p9xx+ImOzLg+TPEmyZE5w45h/8AEHub42Gkn0qgYBlNwRcHvEShKOqaPE0z6iImIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAh4vhNCoSalJGJ3JGvhqNZpXgOGG1O3k9Qfg06Uxm1Ci5Y7KASx7yFGtvGZbckrXdvF9czyyWf4INPg9AbJ72dvzMZC49w+mqCotKiSoy2amNczKB2rE7/jO7jab0qZq1AlNBzqPqSdgqoGLE928pvFOMVKvZtTCA+y1MuW0+d27d+mvKb8JN1JqUXdJ555d6vmtOHEx/SwxsZUtnajvtdcH+7LPwd+B3OF0aVWmCaSgr2LkC5ygahrAkfvBn03R7DHU09f9Sr/vnAw3F6qKEUoFUWHyfL3z7pdI8QDZupa99QjDbcWD3vJccFXrVtmjlduy2n5K7t5XNuMg8JSlWqxtBa2+6y8ruy3u3iWWjw2ktrINNs13t5FyZKldpdJT86mtu8MQfcQb++drBYxKq5kv4g7jzmrF9m4vCrarwaXG6a5pv1ZAwvaOFxLtRmm+GafJpP0JEREgE0REQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQDKoWOVd+Z7r7W8Tr7j5G0cMwC0VsB2jqx5k+J5yt8B7VVm/ahfuC/8AFLPxPEdXRq1PoU3b7qk/ulL2jVk5/STy+Sqr1HOT4LTrxPLel/GDiK7WPyVNmRBy0JDv4kkHXuC95nDmrBk9WpOpKKT5kXM2zs6VGNGCpw0WXXi834nb4ajGjSjTju99783+NBMNsSdrXHoQ0zMoLlR4j8ZtUnD7lqs+RtnTjVi6ctJXT8HkwJO4PierqqeROVvJiBc+RsfSc+j7K+QPwn0w0n0DEUI4ilKlLSSa55c1u7z4Bhq0sPUhVWsWny155rwPQYnxh3zIrfSVT7wDNlp8gvxPrNr6GIiJ6eCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiYdwASeXdv5AczAMM4FhzOwFyT4Ko1PpMYbEI7dWrrn17DXV9N7IwDH0El1KT2bDUWy1jTvXqLeyElgKQfc2sQFW2oZiRs1BxHCiDpUq5gdM5BAIPcAD68pL+hTjLYlL7sr8Ff4ItOtKrdwWS5+6RfejA7QPfUcn/npOp00a2AxR/wC3q/lMpPQXpGBUbD4jMKlI5rgO+ZXvvYE3B0vzFj3y49I6nX4SvRppXZqtKoqWo1QCSpA7RUAeZMo8Vg6/63KEmrp5JvK9919xXf1cf8HkeG9hfqfum0DuknC9H8e4y08NbI2VjUqU/aXRgFD8jpvoQQdQRJJ6BY9/bajl7mc/lppY++dn9J3zdjqcR29h6StTjKb/AJVZc5W9LnHq10X2mt4C5I81Hakc8VXdVZ9d9h960sNf9H/Upnr4vDUVHMoSPIXdbnwEkYHoRTem9U1quUMAtlVCUGXO7Bs2XQsbb6C+txNip01q7lFW/iDtKp/w04Q8XtP8f2lO/XqtgAEFgN9Ttb2r2+E+DWqndz7gPilp6F0Y6I4KtQSo/WvUsBVBqWyVABnS1MLpfa/IiSuMcBwNAMxpAIaYBJLuQWqKmYAsSSAxP2ZJr9pVYR/dLKysstWorhxOXXZc5Nt7Ofdf3PPF4liDZBXq7ABQw2GwAOpnW4fwzH1CL5lH0quVSPKwzfCW3grUagy0fkhcjJTpdte7MVVxqLGxA8GMnvQdRnuWpZzTLMpR1e+iujKpF9ANLdpdTfSrqVqmw3ThFW13vlp7+Za0sDT21GvVnJ+cV8v2InDcM9NMr1GqHvbl4C9zbzJkqIlNKTk7vrkdDGKjFRWi8X73YiImJ6IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJN4Nhesqi4JWkBVbuJFxSW31hmv8AsvGQpKwFUqmKC+01FXS25NNmBHvdPfJGGaU9p7k2vFJtctfIj4u/0mlvsvJvpeZuwQZw7HMod2dirEFtStMKd1ApohNtbnfe9O45h8tQ9XmzEk2LMwtzLZibDy1lw4NVBoJl1ABA+yxX904GLo3eux36wKPqimjAeV3c+plZhazjXae66zffv0NeEjfLicPAYQrikxBYdtDSYBbXIu6NufosPUT0GvxJ0w11IDWVEPczEIh9CQfSUiowXKT/AI1ID1bKfgTLVWol6JUEg6G45EbN6Gx9JJxNWUatOTeV1e29XWRtxNNbNus7m7inFaGDSmrZiW7FKmgLVKhAvYDmeZJ7+8ys8S6V1LFqnW0KY3yUnuPrVqijw2VSO+dvi60cTR6nFKabDtXyl0Vh89HAsV30NmsdgdRX6dHHUE+QxFU0fmg1EWmR3KuLUBR4LcHvM6qmoSV2ynk5JnN4fxvD4ioUoU61eqykMwGd8mt81RmJCi53NtZZq2NA4SrkMuamlN7dpu2y06pGQ87sRz1G05lbgvE8QoSpVTqG1dOsVEfcWf8AVkHWLtoe/nbXfj+BVKVE1XAZqdmUUq7pqpzJtTVSAQNGUjSeuME8meXlvObhePBK1NaFPErVdVCIKN1qIdUBUHtLuQw211sSDI43xRsXkyoUCg9YCwIDq9WmVBQ/KLo/NfZG203LwFguZ3o06VQFuqGKqUEfNqc1MUylyTc2sO1sJ8nAdUwplMhN2Ci2TIAFQUiDbKABpvdiT7VzFxcoRpfbd6eW+5IwkHOslIYDCOGooHIDnKAqoADYsLAgm1lYb8xLTx93WpVpXBvhqDtYWU1RiVRGAJNiQALX5DfSczhQArJUa+Sj2jbdqjDIiIPnHtHTmWXxnQ4w/a6s5TVZlqYgjUKVHyFANzy6N9kG3blfgqijCpUfctEuL3cbrq5Ixd6leNOPvp1YiRESAWIiIg8EREAREQBERAEREAREQBERAEREAREQBERAE14hmUZ01ZQdPpKRZl92o8VWbJD4liCuRFIDVGygnYAAs587AzOEdqSXVrZ37ra9xjNpRbfXA+8DjBTzEW6liGutzkJAzFhyU2vcbEknTUb8UA3yi63W3ZIIYDUeHM635zj8KGapUqYfKlGyKrFS3WuubPUU3ByagCxsSGIGtzLfhua5YYfMdyKJH8Zv6zRVwyjVun+fNcdzs92eZqp/+rdX3Ph5HE4piFQg1D22qUkRV1y5qq+1523PdYc7+hcBtex7pUanAVqGkjFLrVR6YRci5luxLgEhuyH5DXv2ls6PU79rkJnWznS2c3f5/C+XqY4iW1CV8tPn5v8AhHQx/CUemyqAGI0uTl3vZh9E7HwJnmvTnF03LZsRVwVS4DM1GpUGmmVatINYHewsb621Inq9RgAWOwBPulUwWBStVfE1FBGYhL6jNftvbwPZH1W7xLqlVaqqCWWr9vV5aP0K5Lai3J+HiUnobwPH6tRx2I6re9SiwpFhtYVmDkeS27+43XjeJzYQlrqWIpuo1YEsUqKp7/asbcvGdJ0qBwQQULdpbDsrkNsp+tY+RkbjaC1JtgmJot55nya/+S8muV3c1KNkUfpT0brs/X4itjnHNcJ1fV0h9GmrOpCja5BJ3N508ZZFwyZilIJUak2ZXqPmZDYjKRc5hZVveXSrTvl1IytfTnoQQw5ggn1seUrHEqQFVMP216vMyFbC9KrmOQG2mQ0ymliAE11kHHSqbC2dNHlus7etlo3nlvN2HsqiPjC1n+aSHGgY2PVXGrWtlasQTpbKgOxvYyUQAWF/Ukkk6kknUk95maaBQFUAAbATMpoqysuuusy2jBRbe9iIiemYiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCa69BXGV1Vh3MAR7jNkT29tA8zAEzETwEzglINiEzbKlR/C9lpge6q3uk7orVLUA7ABiz3A2uGKG33ZXk4mtHEBWv8opVDyV+pxLAHuLWW3fbwnX6IY5Ww6hSLi9x5s1m9bEzdWjCkqdSXn57duaK6q3J1LcYrkszqcaqEp1Kmz1dARuqAg1H9BoP8zLNdKmFUKosqgAAcgBYCacG5qF6x+exCeFNCVS3g3af7Y7pJlzTgoq+99fn1Ii0Eh8aw5qUKiLfMUOW2+Yarb1AkyJsBH4fixWpJVGzqDbuPzl9Dcekiccw4IWtbWle/1GsH9BYN9ia+FWpVauGGg0qUxyyte4XwuDp/lPfOsRfQ6jnMZRUk4vRiMnFprcV2J800y3Q7oxXxsPZJ81yn1n1KCUXFuL3F3GSkk1vERExPRERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQDg9L8C74aoaIvWzUXTvzUn7Nu+wep94yPgOJthMZSpNouIoOhHIVaTnLr3DtL45gZbMAt61Ed9Vfhdv4ZG6U9F1q1/8oTMv0lqLkF1PK6ZgfEAjWZ1ZR+jFVf2PaXfeyt5LXnxyg1ZWqOK32fq78zs8FdWw9BkN0NGkV+rkW3wkyUjgHH6eFthK5y09epZrAb60idrg7DuItexnewnEKYGZamIqpfs9XQq1Rl5AsiNfuuCNAL3Ny3QJqa2lvIc4OnJxlqjtROZ/wBap79Xi/XC4gfik+k4up0FLFeuHqqPe4Aixjcj9Iz1Zo4rbqqqq5/Z1SEb4lfK57508XXFNSzcgdBuSATlA5nQzicdarXwtal1LU8ysOsqvSREsbo7EMWA0U7SLi+MkKoq4rC0joBlSpVZzbXIezrvqo75la6Mbq5uepmq1yNusA91GkD8QR6T6kfhwXqwUOZWuytYjMGObNlOq77HUSROerSUqkmuJd0ouMEnwERE1mwREQeCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJyOkXH6eFXUZ6jeyg359prA5VuN7Trzyrplm/Xa1826Zd9urSwUXHib/ANZNwGHjXq7MtEr+OaXyRcZXlRp3jq3b3/Baf0e9JMRiuJ0aTsgQdY5VFsBlpMBqbk6sDv7rT0/iTgM5PL+U8j/Q1isLQx9R8Q+SpUpinRZ/YuWu6l9gxCra+/aHn6lxduw577/jMP4hhCEaVKKsm93kvkrsM5VJ/c76L1KHxbCU6yvSqAFWPx7x3GVZ+G4/D36hXxFFdfk2qJUUdx6llLedj6Sz1H1M7/QuvaqR3j8DMoYmeGheOayyfjbxRa4ulGrFyeqWTObw6jX6tHWtVXMqtbrqxtcX1zMbyYXxn+MT4ZkHx6kn4yiY3jGIwOOxGGDFkSs1kckgoxzLl0JXskbaXPpL1wbiiYmkKtO4FyCG3VhuD8D5ESTif1ND7r3i9HbjpquvaHh/09bK1mR62AaoQa6irY3s9Z2APIqGQgHyAkulSrJ/d1Sq29h71R94lSZKiRljq6/bK3Xfc21OzsNUVpwT8ekasG+Woz18PRqAoqg0wAwN2LsbWNzddiSMp7zNmDenVqFVzUlNRwC7MSoFwgyOb5SBnve51AtpbM+atJWFmF/+cjykiHaW1lXhGa5Py3X5GmXZuxG2Hm4W77rzvm1xvc4fDOkf9tWjWpq1JnKWUuHVsxUHMCM2oJylRpLjx7hopFXUBM7FGRScuisc4B9n2V23z63IBlZwXAqdKt16NUz3zAs2bK2vaGYHXUm5vYm411nTtrmJLNtdiSbdwJ2HgNJuxOMwf0fp0YbuCWfG+buvXea6OExn11Uq1Mk9LvThZJLTL1z3IiJSluIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAImjH46nRQ1KrqijmTueQUcz4CUTjXTiq11w69WotdmALkE7r81dL98kYfC1a7+xZcd3++5GmtiKdJfc/Lf14ln6V8e/VaYygGs9xTB2Ft3a3IfGeR8Qx1epUNaqxaoRYsQBYcrAaL5SVjM1RmaozF8+rE3YqbHUncC+3+WR3LKSGGYA6He7EXBYDuHd3TosJg4YePGW9/C32KTE4mVZ8FwM0q6sPQ3HcuwUefx907vDukeLoL1SVmKaDI9nTvyrm1UAX0UjlK8KdNiMpAN9NbEW3Y87/0n3la2jCxznta9nvJHP8AnJFSlTqrZqRTXek/cjxk4u6diyp0oqG16aEm2zEa5c2uh7vj4a7aHTGtTYPRSmp01YlvauBoLc9PWVpKjc1F7nY6Xy3A27tJH69tLI2gTkfmm5+M0ywOHkmnBZ+JIeMrv/s/T8E/iOJevVfE1jmq1O0x0GwAK2GgAAA/G8v/AOjel/ZmcFTnqMbKQSAoC9oD2SbXt5d88prZz7fZHa0Ol7nNbTXXSScChVsyllG1wSrHcX021tPcVhvrUvpp203X0McPW+lPbtfX15nu8Ty/g/S7E0mXOzVka11c6i6kkq9r37J0Oms9LweKSqi1aZDI4upH/N+XpOcxOEqYe23o966uXdDEwrL7deBtiIkUkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIicHppxTqMOQDZ6l1W24Fu2w9NPNhNlOnKpNQjq8uutDGc1CLk9EUrpbxb9ZrkA/JJnpoBz2JqeuXTwtOITca7mnr6f/ZpQ2YeJF7bXB1N/MlfSbb7nwqj3N/SdfSpxpwUI6I5qc3OTlLVn3U5/VX8THM/XH5BD8/JPzGZtr9v+D+kzMDUyKbXAP8AeHUeP9ZrOCXxGqjQ+V/xm/5v2G+Npnv+sv8ADAIy0CBfO9xnPLl2RuO6ZOFP03+jy2Iudh3zNeixGjEf3ndtcn+U+OpqA+3zU695FoBmnhwAb2JynlrdWNj+Hum0kgkm1hmPucH+fumlRUA1ynT8ra++bAWOjADSpsb7sPDxgGxR2vIn4GoP3y7foyxxIq4cnRQjoO64CvbwvlPqZSGawJtexbTyedfoFi8uMpaWDqyHyKkj49X8ZEx1Pbw8l58s/jkScJPYrRflzPWIiJyh0IiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCeZ9PMaXxRX5tJSAPEBWY+pZfuiIlp2TFOu29yfukQO0W1SXiitVV0sO+1+fZBa/vmgVyaQbmxcH1JJ/CInRFIb8O91Unupj/3Im5dx9Y/gYiAfC+yP9P90+m5+afiIiAD/vmG/fT/ADREAxy9H/NMtuft/isRAMP/ALvzifHCq5Rkcb06isPssWHxA90RDSasxex7iYiJxC0OreoiInp4IiIAiIgCIiAIiIAiIgH/2Q=="*/}
                        {/*             alt=""></img>*/}
                        {/*    </div>*/}
                        {/*    <div className="userName">Mister Monkey</div>*/}
                        {/*    <div className="timeAndHour">19/04/2023 22:55</div>*/}
                        {/*    <div className="lastMsg">Hello! my name is Monkey.</div>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-group-item-action">*/}
                        {/*    <div className="user-img">*/}
                        {/*        <img className="dp"*/}
                        {/*             src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"*/}
                        {/*             alt=""></img>*/}
                        {/*    </div>*/}
                        {/*    <div className="userName">No name</div>*/}
                        {/*    <div className="timeAndHour">19/04/2023 22:55</div>*/}
                        {/*    <div className="lastMsg">I don't have a name.</div>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item list-group-item-action">*/}
                        {/*    <div className="user-img">*/}
                        {/*        <img className="dp"*/}
                        {/*             src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"*/}
                        {/*             alt=""></img>*/}
                        {/*    </div>*/}
                        {/*    <div className="userName">Ariel the king007</div>*/}
                        {/*    <div className="timeAndHour">19/04/2023 22:55</div>*/}
                        {/*    <div className="lastMsg">Hello! my name is Ariel.</div>*/}
                        {/*</li>*/}
                    </ListGroupOfContacts>

                </ChatSpace>


                <div className="col-md-9 g-0 chatsList">
                    <h1 className="headerOfBox">
                        <div className="header">
                            <div id="chatNameLogo">
                                Hat Chat
                            </div>
                        </div>
                    </h1>
                    <div className="DivWithScroll">


                        <div id="chatBoxOfMessages">
                            <div id="FullMsgInputBar">
                                <i className="bi bi-emoji-smile"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                     className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path
                                        d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                </svg>

                                <input type="text" id="msgInputBar" className="form-control"
                                       placeholder="Enter message"></input>
                                <button type="button" className="btn btn-success" id="sendBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor"
                                         className="bi bi-send" viewBox="0 0 16 16">
                                        <path
                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
                                    </svg>
                                    send
                                </button>
                            </div>
                        </div>

                        <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                             style={{position: 'relative', height: '400px'}}>

                            <div className="d-flex flex-row justify-content-start">
                                <img className="chatImg"
                                     src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                                     alt="avatar 1"></img>
                                <div>
                                    <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>
                                        This HATCHAT project is for the first assignment given in Advanced
                                        Programming 2 course, Bar
                                        Ilan University.
                                    </p>
                                    <p className="small ms-3 mb-3 rounded-3 text-muted timeHourContact">12:00 PM |
                                        April 20</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-end">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                        Got it! Thanks for the heads-up about the HATCHAT project for Advanced
                                        Programming 2 at Bar
                                        Ilan
                                        University.
                                    </p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted float-end">12:00 PM | April
                                        20</p>
                                </div>
                                <img className="chatImg"
                                     src="https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1592926322727-OL8OFAUGXH0Q5XMF6AXC/IMG-4874.JPG"
                                     alt="avatar 1"></img>
                            </div>

                            <div className="d-flex flex-row justify-content-start">
                                <img className="chatImg"
                                     src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
                                     alt="avatar 1"></img>
                                <div>
                                    <p className="small p-2 ms-3 mb-1 rounded-3"
                                       style={{backgroundColor: '#f5f6f7'}}>
                                        If you want any more details, tell me about it and I'll send you.
                                    </p>
                                    <p className="small ms-3 mb-3 rounded-3 text-muted timeHourContact">12:01 PM |
                                        April 20</p>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-end">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                        Cool man, see you in Sibuchiut.
                                    </p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted float-end">12:03 PM | April
                                        20</p>
                                </div>
                                <img className="chatImg"
                                     src="https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1592926322727-OL8OFAUGXH0Q5XMF6AXC/IMG-4874.JPG"
                                     alt="avatar 1"></img>
                            </div>
                            <div className="d-flex flex-row justify-content-end">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                        Cool man, see you in Sibuchiut.
                                    </p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted float-end">12:03 PM | April
                                        20</p>
                                </div>
                                <img className="chatImg"
                                     src="https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1592926322727-OL8OFAUGXH0Q5XMF6AXC/IMG-4874.JPG"
                                     alt="avatar 1"></img>
                            </div>
                            <div className="d-flex flex-row justify-content-end">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                        Cool man, see you in Sibuchiut.
                                    </p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted float-end">12:03 PM | April
                                        20</p>
                                </div>
                                <img className="chatImg"
                                     src="https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1592926322727-OL8OFAUGXH0Q5XMF6AXC/IMG-4874.JPG"
                                     alt="avatar 1"></img>
                            </div>
                            <div className="d-flex flex-row justify-content-end">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                        Cool man, see you in Sibuchiut.
                                    </p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted float-end">12:03 PM | April
                                        20</p>
                                </div>
                                <img className="chatImg"
                                     src="https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1592926322727-OL8OFAUGXH0Q5XMF6AXC/IMG-4874.JPG"
                                     alt="avatar 1"></img>
                            </div>
                            <div className="d-flex flex-row justify-content-end">
                                <div>
                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                        Cool man, see you in Sibuchiut.
                                    </p>
                                    <p className="small me-3 mb-3 rounded-3 text-muted float-end">12:03 PM | April
                                        20</p>
                                </div>
                                <img className="chatImg"
                                     src="https://images.squarespace-cdn.com/content/v1/5c76de607fdcb8facd765433/1592926322727-OL8OFAUGXH0Q5XMF6AXC/IMG-4874.JPG"
                                     alt="avatar 1"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </GeneralContainer>
        </>
    );
}

export default ChatScreen;