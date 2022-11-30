import React from "react"

export default function MagicCursor(){

    let childrens;
    let MainCursor;
    let CursorBorder;

    React.useEffect(() => {

        childrens = document.querySelector(".cursor").childNodes

        MainCursor = childrens[1]
        CursorBorder = childrens[0]

        document.addEventListener('mousemove', function(e) {
            var x = e.clientX;
            var y = e.clientY;
            MainCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        });
          
        document.addEventListener('mousemove', function(e){
            var x = e.clientX;
            var y = e.clientY;
            CursorBorder.style.left = x + 'px';
            CursorBorder.style.top = y + 'px';
        });

        document.addEventListener('mousedown', function(){
            MainCursor.classList.add('click');
            CursorBorder.classList.add('click')
        });
          
        document.addEventListener('mouseup', function(){
            MainCursor.classList.remove('click')
            CursorBorder.classList.remove('click')
        });

    }, [])

    return (
        <>
            <div className="cursor hidden sm:block">
                <div className="main"/>
                <div className="cursorBorder"/>
            </div>
        </>
    )

}