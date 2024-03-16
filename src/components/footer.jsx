import "./footer.css";
const Footer = () => {
    return (
        <>


            <div class="mt-5 pt-5 pb-5 footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xs-12 about-company">
                            <h2>About Us</h2>
                            <p class="pr-5 text-white-50">Effortlessly manage and track tickets with our user-friendly web app, ensuring streamlined communication and efficient issue resolution.</p>
                            <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                        </div>
                        <div class="col-lg-3 col-xs-12 links">
                            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                            <ul class="m-0 p-0">
                                <li>- <a href="#">Clients Metrix</a></li>
                                <li>- <a href="#">Techorzo Mind</a></li>
                                <li>- <a href="#">CEO-Desk</a></li>
                                <li>- <a href="#">Our Designers</a></li>
                                <li>- <a href="#">Ouer Team</a></li>
                                
                            </ul>
                        </div>
                        <div class="col-lg-4 col-xs-12 location">
                            <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                            <p>Bennargatth Road , Arekere , Bengaluru</p>
                            <p class="mb-0"><i class="fa fa-phone mr-3"></i>+91- 9399039501</p>
                            <p><i class="fa fa-envelope-o mr-3"></i>riniha.techorzo@gmail.com</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col copyright">
                            <p class=""><small class="text-white-50">© 2023. All Rights Reserved @Techorzo-Mind.</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Footer