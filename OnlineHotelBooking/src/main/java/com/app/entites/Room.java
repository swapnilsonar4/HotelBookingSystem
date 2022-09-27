package com.app.entites;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Room 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int rid;
	
	@Column
	String roomtype;
	
	@Column
	double rateperday;
	
	@Column
	int hotelid;
}
