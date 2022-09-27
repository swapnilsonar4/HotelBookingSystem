package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entites.City;
import com.app.entites.Hotel;
import com.app.entites.User;
import com.app.repository.UserRepository;

@Service
public class UserService
{
	@Autowired
	UserRepository urepo;
	
	public List<User> getUser()
	{
		return urepo.findAll();
	}
	
	public User save(User q)
	{
		return urepo.save(q);
	
	}	
	public User checklogin(String email,String password)
	{
		User u=urepo.checKLogin(email);
		if(u!=null)
		{
			 if(email.equals(u.getEmail())&&password.equals(u.getPassword()))
			 {
				 System.out.println("login valid");
				 return u;
			 }
			 else
			 {
				 System.out.println("login failed");
				 return null;
			 }			
		}
		 else
		 {
			 System.out.println("login failed");
			 return null;
		 }
	}	
	public int addHotel(Hotel h,int uid)
	{
		int status= urepo.addHotel(h.getHname(),h.getHotelregno(),h.getAddress(),h.getEmail(),h.getContact_no(),h.getAc_room(),h.getNon_ac_room(),uid,h.getCityname());
				System.out.println(status);
				if(status==1)
				{
					System.out.println("in status");
					int hid=urepo.getlasthid();
					return hid;
				}
				else
				{
					return 0;
				}
		//System.out.println(h);
		
		//return urepo.addHotel(h.getHname(),h.getHotelregno(),h.getAddress(),h.getEmail(),h.getContact_no(),h.getAc_room(),h.getNon_ac_room(),uid,h.getCityname());	
	}	
	public List<Hotel> searchHotelByCity(String c) 
	{		
	List<Hotel>	hotel=urepo.searchHotelByCity(c);
		return hotel;
	}
	
	/*new methodImpl added*/
	public List<Hotel> findHotelByName(String n)
	{
		try {
			List<Hotel> hotel=urepo.findHotelByName(n);	
			return hotel;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
 	
	public int updateUser(User u)
	{
		
		return urepo.updateById(u.getUid(),u.getFname(),u.getLname(),u.getEmail(),u.getPassword(),u.getAadhar_no(),u.getContact_no(),u.getAddress());
	}
	public User getUserbyid(int uid) {
		
		return urepo.getById(uid);
	}
	public int deleteuserbyuid(int uid) {
		
		return urepo.deleteuserbyuid(uid);
	}	
}
