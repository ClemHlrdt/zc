<!-- Modal structure -->
<div id="trigger_id">
    <!-- Page content -->
    <div id="mlSuggesterPopup" style="opacity: 1; visibility: visible;">
        
        <div class="content">
            <div class="close">X</div>
            <p class="title">Robisz prezent?</p>
            <div class="bonuses row">
                <form autocomplete="off" class="product-form" action="">
            <div class="question multi-answer description">1. Dla kogo</div>
            <div class="answers">
                <div class="flexContainer">
                    <div class="flexItem">
                    <input id="person1" name='person' type='radio' class="btn btn-choice person" data-tag=".woman"></input>
                    <label for="person1">Woman</label>
                </div>
                <div class="flexItem">
                    <input id="person2" name='person' type='radio' class="btn btn-choice person" data-tag=".man"></input>
                    <label for="person2">Man</label>
                </div> 
                </div>
                  
            </div>
            <div class="question description">2. Cena</div>
            <div class="answers">   
                    <div class="flexContainer">
                        <div>
                            <div class="flexItem">
                                <input id="price1" name='price' type='radio' class="btn btn-choice price" data-tag=".price-150"></input>
                                <label for="price1">Do 150zł</label>
                            </div>                        
                        </div>  
                        <div>
                            <div class="flexItem">
                                <input id="price2" name='price' type='radio' class="btn btn-choice price" data-tag=".price-150-350"></input>
                                <label for="price2">150-350zł</label>
                            </div> 
                        </div>
                        <div>
                            <div class="flexItem">
                                <input id="price3" name='price' type='radio' class="btn btn-choice price" data-tag=".price-350-700"></input>
                                <label for="price3">350-700zł</label>
                            </div> 
                        </div>                         
                        <div>
                            <div class="flexItem">
                                <input id="price4" name='price' type='radio' class="btn btn-choice price" data-tag=".price-700"></input>
                                <label for="price4">Powyżej 700zł</label>
                            </div>    
                        </div>
                    </div>
                </div>                    
            </div>       
            <div class="question multi-answer description">3. Styl</div>
            <div class="answers">
                <div class="flexContainer">
                    <div class="flexItem">
                        <input id="type1" name='type' type='checkbox' class="btn btn-choice type" data-tag=".elegant"></input>
                        <label for="type1">Elegant</label>
                    </div>
                    <div class="flexItem">
                        <input id="type2" name='type' type='checkbox' class="btn btn-choice type" data-tag=".sport"></input>
                        <label for="type2">Sport</label>
                    </div>
                    <div class="flexItem">
                        <input id="type3" name='type' type='checkbox' class="btn btn-choice type" data-tag=".fashion"></input>
                        <label for="type3">Fashion</label>
                    </div>
                    <div class="flexItem">
                        <input id="type3" name='type' type='checkbox' class="btn btn-choice type" data-tag=".smartwatch"></input>
                        <label for="type3">Smartwatch</label>
                    </div>    
                </div>
            </div>
            <div class="question description">4. Wiek</div>
            <div class="answers">
                <div class="flexContainer">
                    <div class="flexItem">
                        <input id="age1" name='age' type='radio' class="btn btn-choice age" data-tag=".age-20"></input>
                        <label for="age1">< 20</label>
                    </div>
                    <div class="flexItem">
                        <input id="age2" name='age' type='radio' class="btn btn-choice age" data-tag=".age-20-40"></input>
                        <label for="">20 - 40</label>
                    </div>
                    <div class="flexItem">
                        <input id="age3" name='age' type='radio' class="btn btn-choice age" data-tag=".age-40"></input>
                        <label for="age3">40+</label>
                    </div>
                </div>
                
            </div>            
        </form>
        <!--<button value="Reset">Reset</button>-->
        <!--<button class="sortingButton desc">Sorting</button>-->
        <button class="toggleButton">zobacz wyniki</button>
            </div>
            
    </div>
        </div>
</div>


<div class="box" id="box_mainproducts">
    <div class="innerbox">
        <div class="products viewphot s-row">

        </div>
    </div>
</div>