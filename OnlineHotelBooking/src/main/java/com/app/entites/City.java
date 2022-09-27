package com.app.entites;

import java.util.Set;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;


@Data
@Entity
@Table(name="city")
public class City 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cityid;
	
	@Column
	String cityname;
	/*
	@JsonIgnoreProperties("city")
	@OneToMany(mappedBy = "city",cascade = CascadeType.ALL)
	Set<Hotel> hotel;
	 	*/
}
