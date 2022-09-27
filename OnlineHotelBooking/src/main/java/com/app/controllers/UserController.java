package com.app.controllers;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.entites.City;
import com.app.entites.Hotel;
import com.app.entites.User;
import com.app.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController
{
	@Autowired
	UserService uservice;
	
	@GetMapping("/getuser")
	public List<User> getAll()
	{
		return uservice.getUser();
	}
	
	@PostMapping("/register")
	public User save(@RequestBody User q)
	{		
		return uservice.save(q);
	}	
	
	@PostMapping("/login")
	public User checkLogin(@RequestBody User u)
	{
		System.out.println(u);
		return uservice.checklogin(u.getEmail(), u.getPassword());
	}
	
	@PostMapping("/city")
	public List<Hotel> searchHotelByCity(@RequestParam(value="cityname") String cityname)
	{
		System.out.println(cityname);
		return uservice.searchHotelByCity(cityname);
	}
	
	//new controller added
	@PostMapping("/findHotelByName")
	public List<Hotel> findHotelByName(@RequestParam(value="hname") String hname)
	{
		System.out.println(hname);
		return uservice.findHotelByName(hname);
	}
	// new added
	/*
	@PostMapping("/hotelname")
	public List<Hotel> findHotelByName(@ RequestParam(value="hname") String hname)
	{
		System.out.println(hname);
		return uservice.findHotelByName(hname);
	}
	*/
	
	@PostMapping("/addhotel")
	public int addHotel(@RequestBody Hotel h,@RequestParam(value = "uid", required = false) Integer uid)
	{
		System.out.println(h);
		return uservice.addHotel(h,uid);
	}
	
	
	@PostMapping("/images")
	public int saveAndUpload(@RequestParam(value = "hotelid", required = false) Integer hotelid,@RequestPart("file") MultipartFile file)
	{		
	//Hotel hotelid=uservice.findById(hotelid)		
		System.out.println(file.getSize());
	boolean flag =true;
	try
	{
	byte [] data = file.getBytes();
	
	Path path=Paths.get("D:\\Project_sample\\HotelProject\\hotelNew\\ReactJs\\firstreactapp\\src\\components\\hotelfrontend\\images//"+hotelid+".jpg");
	//D:\\WPT\\ReactJs\\firstreactapp\\src\\components\\hotelfrontend\\images//
	System.out.println(path);
	Files.write(path,data);
	}
	catch(Exception e)
	{
		flag=false;
	}
	if(flag)
		return 1;
	else return 0;
	}	
	
	@PutMapping("/update")
	public int updateUser(@RequestBody User u)
	{
		return uservice.updateUser(u);
	}
	
	@PostMapping("/getuserbyid")
	public User getUserbyid(@RequestParam(value="uid") int uid)
	{
		return uservice.getUserbyid(uid);
	}
	
	@GetMapping("/deleteuserbyuid")
	public int deleteuserbyuid(@RequestParam(value="uid") int uid)
	{		
		return uservice.deleteuserbyuid(uid);
	}	
}
