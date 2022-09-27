package com.app.entites;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;


@Data
@Entity
@Table(name="booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int bookingid;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date bookingdate;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date checkin;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date checkout;
	
	@Column
	int no_of_rooms;
	
	@Column
	String status;
	
	@Column
	int rid;
	
	@Column
	int uid;
	
	@Column
	double totalcost;	
}
