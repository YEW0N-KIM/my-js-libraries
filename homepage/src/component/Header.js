import "./Header.css";

function Header(){
    return(
        <header>
            <div class="logo">
                <img src="https://placehold.co/150x55"/>
            </div>
            
            <div class="menu">
                <div class="menu_btn"><a href="#">농장 소개</a></div>
                <div class="menu_btn"><a href="#">농장 이야기</a></div>
                <div class="menu_btn"><a href="#">농산물 판매</a></div>
                <div class="menu_btn"><a href="#">문의 사항</a></div>
            </div>

            <div class="login">
                <div class="login_btn"><a href="#">로그인</a></div>
                <div class="login_btn"><a href="#">회원가입</a></div>
            </div>

            <div class="mobile_menu">
                <button >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                   <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                </svg>
                </button>
            </div>
            
        </header>
    );
}

export default Header;