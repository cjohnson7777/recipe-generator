import './Dietarymenu.css'

function Dietarymenu(){
    return (
        <div>
            <div className='dietmenu'>
                <form action="" className='dietform'>
                    <h3>Meal Preferances</h3>
                    <div>
                        <label htmlFor="">Meal</label>
                        <button className='dietbutton'>Breakfast</button>
                        <button className='dietbutton'>Lunch</button>
                        <button className='dietbutton'>Dinner</button>
                    </div>
                    <label htmlFor="">Cuizine</label>
                    {/* dropdown menu with cuizine types*/}
                    <label htmlFor="">Non Dairy</label>
                    <input type="radio" />

                </form>
            </div>

            
        </div>
    )
}

export default Dietarymenu;