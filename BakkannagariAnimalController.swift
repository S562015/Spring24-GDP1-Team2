//
//  BakkannagariAnimalController.swift
//  Bakkannagari_Exam03
//
//  Created by Bakkannagari,Shiva Kumar Reddy on 4/18/24.
//

import UIKit

class BakkannagariAnimalController: UIViewController {
    
    var animalImage:UIImage?
    var name = ""
    var animalDescription = ""
    
    
    @IBOutlet weak var imageViewOL: UIImageView!
    @IBOutlet weak var nameOL: UILabel!
    @IBOutlet weak var descriptionOL: UITextView!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
//        imageViewOL.image = animalImage
        nameOL.text = name
        descriptionOL.text =  animalDescription
        self.title = name
        
        UIView.animate(withDuration: 1, animations: {
            self.imageViewOL.alpha = 0
        })
        // Assign the new image with an animation and  make it transparent(alpha = 1)
        UIView.animate(withDuration: 1, delay: 0.1, animations: {
            self.imageViewOL.alpha = 1
            self.imageViewOL.image = self.animalImage
        })
    }
    
    
    
    
    
    
    
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
