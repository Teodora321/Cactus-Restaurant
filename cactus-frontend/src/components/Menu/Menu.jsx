    import React from 'react';
import styled from 'styled-components';

function Menu() {
    return (
        <MenuContainer>
            <body>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet"/>
                <section className="menu_list mt-60 mb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center mb-60">
                                    <p>Famous for good food</p>
                                    <h4>our menu</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <ul className="nav nav-tabs menu_tab" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab" aria-selected="false">Breakfast</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab" aria-selected="false">Lunch</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active show" id="dinner-tab" data-toggle="tab" href="#dinner" role="tab" aria-selected="true">Dinner</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="tab-content col-xl-12" id="myTabContent">
                                <div className="tab-pane fade" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-6.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade active show" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-1.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-1.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                            <div className="single_menu_list">
                                                <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                                <div className="menu_content">
                                                    <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                    <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 text-center">
                                <div className="box_btn">
                                    <a href="#">view more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </MenuContainer>
    )
}
export default Menu;

const MenuContainer = styled.section`
body {
	font-family: 'Montserrat', sans-serif;
	color: #333;
	line-height: 1.6;
}
.mb-60 {
	margin-bottom: 60px;
}
.section-title p {
	font-size: 24px;
	font-family: Oleo Script;
	margin-bottom: 0px;
}
.section-title h4 {
	font-size: 40px;
	text-transform: capitalize;
	color: #FF5E18;
	position: relative;
	display: inline-block;
	padding-bottom: 25px;
}
.section-title h4::before {
	width: 80px;
	height: 1.5px;
	bottom: 0;
	left: 50%;
	margin-left: -40px;
}
.section-title h4::before, .section-title h4::after {
	position: absolute;
	content: "";
	background-color: #FF5E18;
}
#myTabContent {
	margin-top: 50px;
}
.menu_tab {
	width: auto;
	margin: 0 auto;
}
.nav-tabs .nav-item {
	margin-bottom: -1px;
}
.nav-item a {
	color: #333;
}
.menu_tab .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
	color: white;
	background-color: #FF5E18;
	border-color: #FF5E18;
}
.single_menu_list {
	position: relative;
	padding-left: 190px;
	margin-bottom: 110px;
}

.single_menu_list img {
	max-width: 30%;
	position: absolute;
	left: 0px;
	top: 0;
	border: 1px solid #ddd;
	padding: 3px;
	border-radius: 50%;
	transition: .4s
}

.single_menu_list:hover img {
	border-radius: 0;
	transition: .4s
}

.single_menu_list h4 {
	font-size: 20px;
	border-bottom: 1px dashed #333;
	padding-bottom: 15px;
	margin-bottom: 10px;
}

.single_menu_list h4 span {
	float: right;
	font-weight: bold;
	color: #FF5E18;
	font-style: italic;
}
`