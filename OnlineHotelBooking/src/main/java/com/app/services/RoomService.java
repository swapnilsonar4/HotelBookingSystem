package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entites.Room;
import com.app.entites.User;
import com.app.repository.RoomRepository;
import com.app.repository.UserRepository;

@Service
public class RoomService {

	@Autowired
	RoomRepository rrepo;
	
	public List<Room> getRoom()
	{
		return rrepo.findAll();
	}

	public List<Room> getRoomByid(int hotelid) {	
		return rrepo.getByid(hotelid);
	}

	public int addRoom(Room r, int hotelid)
	{	
		return rrepo.addRoomById(r.getRateperday(),r.getRoomtype(),hotelid);
	}

	public void addroom(String roomtype, double rateperday, int hotelid) {
		// TODO Auto-generated method stub
		rrepo.addroom(roomtype, rateperday, hotelid);		
	}

}
