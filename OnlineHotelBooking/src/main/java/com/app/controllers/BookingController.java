package com.app.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entites.Booking;
import com.app.entites.User;
import com.app.services.BookingService;
import com.app.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookingController {

	@Autowired
	BookingService bservice;
		
	@GetMapping("/getbooking")
	public List<Booking> getAll()
	{
		return bservice.getBookings();
	}
	
	@PostMapping("/booking")
	public int booking(@RequestBody Booking b,@RequestParam(value="rid") int rid,@RequestParam(value="uid") int uid)
	{
		return bservice.booking(b,rid,uid);
	}
	
	@PostMapping("/getcost")
	public int getbid(@RequestParam(value="bookingid") int bookingid)
	{
		return bservice.getcost(bookingid);
	}
}
