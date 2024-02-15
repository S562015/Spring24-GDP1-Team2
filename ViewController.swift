//
//  ViewController.swift
//  Bakkannagari_Exam01
//
//  Created by Bakkannagari,Shiva Kumar Reddy on 2/15/24.
//

import UIKit

class ViewController: UIViewController {
    
    
    
    @IBOutlet weak var patientID: UITextField!
    @IBOutlet weak var FBGOL: UITextField!
    @IBOutlet weak var outputOL: UILabel!
    @IBOutlet weak var imageOL: UIImageView!
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    func dispalyMsg(_ ID:String, _ FBG:Double, _ hb1a1c:Double, _ type:String, _ tip:String    )-> String{
        return """
          Patient ID :\(ID)
          FBG Level  :\(FBG) (mg/dl)
          HbA1c(%)   : \(hb1a1c) %
          Result     : \(type)
          Health     : \(tip)
        """

    }

    @IBAction func calHbA1c(_ sender: Any) {
        //HbA1c = 2.6 + 0.03 × FBG
        guard let FBG = Double(FBGOL.text!)else {
                    return
                }
        let HbA1c = 2.6 + (0.03  * FBG);

        let ID = patientID.text!
        if(HbA1c < 4.70){
            imageOL.image = UIImage(named: "hypoglycemia");
            outputOL.text = dispalyMsg(ID, FBG, HbA1c, "Hypoglycemia", "Eat food on time 🍎")
        }
        if(HbA1c >= 4.70 && HbA1c < 5.59){
            imageOL.image = UIImage(named: "normal");
            outputOL.text = dispalyMsg(ID, FBG, HbA1c, "Normal", "You are doing great 👍")
        }
        if(HbA1c >= 5.60 && HbA1c < 6.35){
            imageOL.image = UIImage(named: "pre-diabetes");
            outputOL.text = dispalyMsg(ID, FBG, HbA1c, "Pre-Diabetes", "You should work on your diet and maintain workout 🏋️")
        }
        if(HbA1c > 6.35){
            imageOL.image = UIImage(named: "diabetes");
            outputOL.text = dispalyMsg(ID, FBG, HbA1c, "Diabetes", "Consult doctor for medication 🩺")
        }
        
        
    }
    
    @IBAction func handleReset(_ sender: Any) {
        patientID.text = ""
        FBGOL.text = ""
        outputOL.text = ""
        imageOL.image =  nil;
    }
    
    
}

