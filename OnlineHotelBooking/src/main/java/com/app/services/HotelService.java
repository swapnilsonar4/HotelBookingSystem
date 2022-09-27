package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entites.Hotel;
import com.app.repository.HotelRepository;
import com.app.repository.UserRepository;

@Service
public class HotelService {

	@Autowired
	HotelRepository hrepo;

	public Hotel getByid(int hotelid) 
	{
		System.out.println(hrepo.getById(hotelid));
		
		return hrepo.getById(hotelid);
	}

	public List<Hotel> getHotels()
	{
		return hrepo.findAll();
	}

	public List<Hotel> getByuid(int uid) {
		
		return hrepo.getByuid(uid);
	}

	public int deletehotelbyhid(int hotelid) {
		// TODO Auto-generated method stub
		System.out.println("hotelid is"+hotelid);
		int s=hrepo.deletehotelbyhid(hotelid);
		System.out.println(s);
		return s;
	}
}
