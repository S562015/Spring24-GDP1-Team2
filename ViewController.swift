//
//  ViewController.swift
//  Bakkannagari_Exam02
//
//  Created by Bakkannagari,Shiva Kumar Reddy on 4/11/24.
//

import UIKit

class ViewController: UIViewController {
    
    var patinetId = ""
    var systolic:Double = 0.0
    var diastolic:Double = 0.0
    var MBP:Double = 0.0
    var result = ""
    var healthTip = ""	
    var img = ""
    
    
    @IBOutlet weak var patientIdOL: UITextField!
    @IBOutlet weak var systolicOL: UITextField!
    @IBOutlet weak var diastolicOL: UITextField!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func handleCheck(_ sender: Any) {
        patinetId = patientIdOL.text!
        systolic = Double(systolicOL.text!)!
        diastolic = Double(diastolicOL.text!)!
        MBP = ( 0.667 * diastolic) + (0.334  * systolic)
        
        
        if(MBP < 60){  // stroke
            result = "Stroke or Internal Bleeding"
            healthTip="Seek immediate medical Attention. 👨🏻‍⚕️"
            img = "stroke"
        }
        
        if(MBP > 60 && MBP < 69){  // hypotension
            result = "Hypotension"
            healthTip="Stay Hydrated 🥛"
            img = "hypotension"
        }
        
        if(MBP > 70 && MBP < 99){  // hypotension
            result = "Healthy"
            healthTip="You are doing great 👍"
            img = "healthy"
        }
        
        if(MBP > 100 && MBP < 106){  // Elevated
            result = "Elevated"
            healthTip="Make sure to maintain workout 🏋️"
            img = "elevated"
        }
        if(MBP > 107 ){  // Elevated
            result = "Hypertension"
            healthTip="Consult doctor for medication tab 💊"
            img = "hypertension"
        }
        
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let transition = segue.identifier
        // set the destination
        if(transition == "resultSegue"){
            let destination = segue.destination as! ResultViewController
            // Assign the values to the destination variables.
            destination.patinetId = patinetId
            destination.diastolic = diastolic
            destination.systolic = systolic
            destination.MBP = MBP
            destination.result = result
            destination.healthTip = healthTip
            destination.img = img
        }
    }
    
    
}


