import React from "react";
import "./user.css"

const User = () => {
	return (
		<div className="user">
			<div className="user__inner">
				<img src="https://pp.userapi.com/c10072/u43709447/-6/x_fb533f7e.jpg" alt="" />

				<div className="user__descr">
					<ul className="user__list">
					<p className="user__title">VOR</p>
						<li className="user__item">
							<span>Date of Birth:</span>
							<span className="user-subtitle">2 junuary</span>
						</li>
						<li className="user__item">
							<span>City:</span>
							<span className="user-subtitle">Labinsk</span>
						</li>
						<li className="user__item">
							<span>Education:</span>
							<span className="user-subtitle">Fartu</span>
						</li>
						<li className="user__item">
							<span>VK:</span>
							<a href="https://vk.com/fordruid" className="user-subtitle">ya</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default User;