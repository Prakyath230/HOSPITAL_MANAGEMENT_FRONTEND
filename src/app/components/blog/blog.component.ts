import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs = [
    {
      title: 'The Future of Healthcare Technology',
      author: 'Dr. A. Sharma',
      date: 'Aug 28, 2025',
      summary: 'Exploring how AI, robotics, and telemedicine are transforming patient care.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2465630553/display_1500/stock-photo-medical-worker-touch-virtual-medical-revolution-and-advance-of-technology-artificial-intelligence-2465630553.jpg',
      fullText: 'Artificial Intelligence is driving predictive diagnostics, robotics are enhancing surgeries, and telemedicine is bridging geographical gaps in healthcare.Regarding future advancements in healthcare technology, Artificial Intelligence (AI) is growing rapidly, with a projected value of $148.4 billion by 2029. This growth is largely driven by the availability of vast healthcare and technology data sets, which can revolutionize the industry through AI-driven solutions. Key applications include analyzing medical images using AI algorithms, using AI-powered Clinical Decision Support Systems for patient data assessment, and running AI-driven chatbots and virtual assistants.'
    },
    {
      title: 'Mental Health Awareness in Modern Times',
      author: 'Dr. R. Kapoor',
      date: 'Aug 20, 2025',
      summary: 'Why prioritizing mental health is just as important as physical well-being.',
      image: 'https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=',
      fullText: 'Modern lifestyles have increased stress and anxiety levels. Open conversations, therapy, and awareness programs are key to building healthier societies. that “People who have perfect lives can’t have mental health conditions because they don’t have anything to be depressed about.” What someone’s life may look like on the surface level has nothing to do with what their mental state is like. Again, as mentioned before, anybody can develop a mental health condition regardless of what their life seems like on the outside or who they are. Wealth, success, or a “perfect life” don’t prevent anybody from developing a mental illness; judging someone’s mental state based on their external life can be one of the primary reasons why there is so much prejudice and misunderstanding. '
    }
  ];

  expandedIndex: number | null = null;

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
