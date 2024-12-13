package com.sta.OnlineTicketBooking;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BookingController {
	
	@GetMapping("/index")
	public String home() {
		return "index.html";
	}

	@GetMapping("/movies")
	public String movies() {
		return "moviePage.html";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login.html";
	}
	
	@GetMapping("/newAccount")
	public String account() {
		return "newAccount.html";
	}
}
